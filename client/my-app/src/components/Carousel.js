function Carousel() {
    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div
                        className="carousel-caption d-none d-md-block"
                        style={{
                            marginBottom: "2vh",
                            backgroundColor: "rgba(28, 40, 51, 0.7)",
                        }}
                    >
                        <h1>Hot This Week!</h1>
                        <h5>TENET</h5>
                        <p>
                            Armed with only one word, Tenet, and fighting for
                            the survival of the entire world, a Protagonist
                            journeys through a twilight world of international
                            espionage on a mission that will unfold in something
                            beyond real time.
                        </p>
                    </div>
                    <img
                        src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/09/John-David-Washington-christopher-nolan-Tenet-wallpaper.jpg"
                        className="d-block w-100"
                        alt="..."
                        style={{ width: "100vw", height: "80vh" }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://montasefilm.com/wp-content/uploads/2021/03/raya-and-the-last-dragon-cartoonimages-club-new-promo-1024x692-1.jpg"
                        className="d-block w-100"
                        alt="..."
                        style={{ width: "100vw", height: "80vh" }}
                    />
                    <div
                        className="carousel-caption d-none d-md-block"
                        style={{
                            marginBottom: "2vh",
                            backgroundColor: "rgba(28, 40, 51, 0.7)",
                        }}
                    >
                        <h1>Hot This Week!</h1>
                        <h5>ARYA AND THE LAST DRAGON</h5>
                        <p>
                            In a realm known as Kumandra, a re-imagined Earth
                            inhabited by an ancient civilization, a warrior
                            named Raya is determined to find the last dragon.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://cpb-us-e1.wpmucdn.com/www.thelantern.com/dist/c/1/files/2020/12/LIFE-HBY-COMICS-1-MCT.jpg"
                        className="d-block w-100"
                        alt="..."
                        style={{ width: "100vw", height: "80vh" }}
                    />
                    <div
                        className="carousel-caption d-none d-md-block"
                        style={{
                            marginBottom: "2vh",
                            backgroundColor: "rgba(28, 40, 51, 0.7)",
                        }}
                    >
                        <h1>Hot This Week!</h1>
                        <h5>WONDER WOMAN 1984</h5>
                        <p>
                            Diana must contend with a work colleague and
                            businessman, whose desire for extreme wealth sends
                            the world down a path of destruction, after an
                            ancient artifact that grants wishes goes missing.
                        </p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel