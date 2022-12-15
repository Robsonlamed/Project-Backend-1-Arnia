export const reviewsFactory = () => {
  return [
    {
      title: (function () {
        return Math.random().toString(36).substring(7);
      })(),
      textReview: [
        (function () {
          return Math.random().toString(36).substring(7);
        })(),
      ],
      updateDate: [new Date()],
      score: 3,
    },
  ];
};
