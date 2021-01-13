import mongoose from 'mongoose';

class Database{
  constructor(){
    this.init();
  }

  init(){
    mongoose.connect('mongodb://localhost/templatedb',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      console.log('MongoDB connected')
    );
  }
}

export default new Database();