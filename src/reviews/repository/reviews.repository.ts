import { Model } from "mongoose";
import { Review } from "../models/reviews.model";

export class ReviewsRepository {
  constructor(private readonly reviewsModel: Model<Review>) {}

  async getAll(): Promise<Review[]> {
    const review = await this.reviewsModel.find();
    return review;
  }

  async getById(id: string): Promise<Review> {
    const review = await this.reviewsModel.findById(id);

    if (review === null) {
      return {} as Review;
    }

    return review;
  }

  async create(review: Review): Promise<Review> {
    const newreview = this.reviewsModel.create(review);
    return newreview;
  }

  async update(id: string, review: Review): Promise<Review> {
    const { textReview, updateDate } = review;
    const updatedReview = await this.reviewsModel.findByIdAndUpdate(
      id,
      {
        $set: {
          textReview,
        },
        $push: {
          updateDate: new Date(),
        },
      },
      {
        new: true,
      }
    );

    if (updatedReview === null) {
      return {} as Review;
    }

    return updatedReview;
  }
}
