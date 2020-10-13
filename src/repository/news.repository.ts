import * as mongoose from 'mongoose';
import NewsSchema from '../models/news.model';

export default mongoose.model('news', NewsSchema);