import mongoose, { Mongoose } from 'mongoose';
import { PasswordManager } from '../services/password-manager';

// interface describing new User properties
interface UserAttrs {
  email: string;
  password: string;
}

// interface describing User Model properties, making typescript aware
// of the custom build() method
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// interface describing User Document properties
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        // remove password property from response
        delete ret.password;
        // transform _id to id
        ret.id = ret._id;
        delete ret._id;
      },
      // remove __v property
      versionKey: false,
    },
  }
);

// must use function keyword to have access to UserDoc on `this`
userSchema.pre('save', async function (done): Promise<void> {
  // returns true on create
  if (this.isModified('password')) {
    const hashed = await PasswordManager.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

/**
 * force typescript to be involved with creating a user by requiring UserAttrs
 * https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
 */
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
