import mongoose, { Mongoose } from 'mongoose';

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

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
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
