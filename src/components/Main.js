import React from "react";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "./styles/Cards.styled";
const Main = () => {
  return (
    <CardsContainer style={{
      color: "#fffff",
      borderRadius: "6px",
      border: "solid",
      boxShadow:
        " 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    }}>
      <Card style={{ padding: "10px" }}>
        <CardTitle>Card 1</CardTitle>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut placerat odio. Proin fringilla non lorem iaculis tincidunt. Vestibulum vestibulum posuere est, ut ullamcorper odio accumsan quis. Etiam quis fringilla sem. Nunc et pellentesque felis, sollicitudin accumsan turpis. Nulla tempor enim id odio hendrerit, ut euismod velit gravida. Cras et ipsum at risus tempus imperdiet. Etiam sed lacus posuere, scelerisque dui et, iaculis sem. Praesent interdum purus eu mi dictum efficitur.

          </p>
        </CardBody>
      </Card>
      <Card style={{ padding: "10px" }}>
        <CardTitle>Card 2</CardTitle>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut placerat odio. Proin fringilla non lorem iaculis tincidunt. Vestibulum vestibulum posuere est, ut ullamcorper odio accumsan quis. Etiam quis fringilla sem. Nunc et pellentesque felis, sollicitudin accumsan turpis. Nulla tempor enim id odio hendrerit, ut euismod velit gravida. Cras et ipsum at risus tempus imperdiet. Etiam sed lacus posuere, scelerisque dui et, iaculis sem.         Lorem ipsum dolor sit amet, consectetur adipiscing elit.         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum purus eu mi dictum efficitur.

            Aliquam erat volutpat. Praesent cursus eleifend orci, nec auctor neque consequat et.
          </p>
        </CardBody>
      </Card>
      <div>
        <Card style={{ padding: "10px", }}>
          <CardBody style={{ border: "solid", borderRadius: "6px" }}>
            <div style={{ padding: "20px", display: "flex" }}>
              <form action="" style={{ padding: "2px" }}>
                <div style={{ padding: "4px" }}>
                  <label for="fname">First Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="First Name" />
                </div>
                <div>
                  <label for="lname">Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Last Name" style={{ marginLeft: "4px" }} />
                </div>
                <p>Radio button:</p>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Option 1</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">Option 2</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript">Option 3</label>
                <div>
                  <input type="submit" value="Submit" style={{
                    padding: "10px", marginTop: "10px",
                    width: "100px",
                    color: "white",
                    background: "grey",

                  }} />
                </div>
              </form>
            </div>
          </CardBody>

        </Card>
      </div>
    </CardsContainer>
  )
};
export default Main;