const Shimmer = () => {
  return (
    <div class="cardListShimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} class="cardShimmer is-loading">
            <div class="image"></div>
            <div class="content">
              <h2></h2>
              <p></p>
            </div>
          </div>
        ))}
    </div>
    //   <div className="restaurantList">
    //   {Array(10).fill("").map((e, index) => <div key={index} className="shimmer-card"></div>)}
    //   </div>
  );
};

export default Shimmer;
