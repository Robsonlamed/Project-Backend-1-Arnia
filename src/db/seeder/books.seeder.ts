import { BooksModel } from "../../books/models/books.model";
import { ReviewsModel } from "../../reviews/models/reviews.model";

export async function seeder() {
    //aqui chamamos a função de conexão

    const books = (reviewId: string) => (
    [
      {
        title: "teste11",
        releaseDate: "1997",
        language: ['português', 'inglês'],
        status: true,
        review: reviewId,
        author: "J. K. Rowling3",
      },
      {
        title: "teste2",
        releaseDate: "1998",
        language: ['português', 'inglês'],
        status: true,
        author: "J. K. Rowling1",
      },
      {
        title: "teste3",
        releaseDate: "1999",
        language: ['português', 'inglês'],
        status: true,
        author: "J. K. Rowling2",
      },
    ]
    )
    const reviews = [
      {
        title: "review livro1",
        textReview: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        updateDate: [new Date()],
        score: 3,
      },
      {
        title: "review livro2",
        textReview: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        updateDate: [new Date()],
        score: 3,
      },
      {
        title: "review livro 3",
        textReview: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        updateDate: [new Date()],
        score: 3,
      },
    ]

  try {
      await BooksModel.insertMany(books("638ba7a3e79199b0533d047d"));
      // await ReviewsModel.insertMany(reviews)
      console.log("DB successfully seeded");

  } catch (error) {
      console.log(`failed to seeder Books`);
      console.log(error);

  } 
}


