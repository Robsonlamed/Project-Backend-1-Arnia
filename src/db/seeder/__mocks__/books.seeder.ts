export const bookFactory = (id: any) => {
    return {
      title: function () {
        return Math.random().toString(36).substring(7);
      }(),
      releaseDate: new Date(),
      language: ['portugues', 'ingles'],
      status: true,
      reviewId: id,
      author: function () {
        return Math.random().toString(36).substring(7);
      }()
    }
  }
