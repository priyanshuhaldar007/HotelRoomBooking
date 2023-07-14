import "../assets/Styles/Home.css";

export default function Services({refProps}) {
    return (
        <div className="Services SectionParent" ref={refProps}>
            <div className="heading underline BodyHeading">Our Services</div>
            <div className="backgroundParent">
                <div className="bgBox"></div>
                <div className="bgBox"></div>
            </div>
            <div className="serviceCardParent">
                <figure className="card">
                    <img src="https://picsum.photos/300/400" alt="" />
                    <figcaption>
                        <h1>A title</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </figcaption>
                </figure>
                <figure className="card">
                    <img src="https://picsum.photos/300/400" alt="" />
                    <figcaption>
                        <h1>A title</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </figcaption>
                </figure>
                <figure className="card">
                    <img src="https://picsum.photos/300/400" alt="" />
                    <figcaption>
                        <h1>A title</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </figcaption>
                </figure>
                <figure className="card">
                    <img src="https://picsum.photos/300/400" alt="" />
                    <figcaption>
                        <h1>A title</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </figcaption>
                </figure>
                <figure className="card">
                    <img src="https://picsum.photos/300/400" alt="" />
                    <figcaption>
                        <h1>A title</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
