import React from "react";
import {
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from "./styles/Cards.styled";
const Main = () => {
  return (
    <CardsContainer>
      <Card>
        <CardTitle>Card 1</CardTitle>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut placerat odio. Proin fringilla non lorem iaculis tincidunt. Vestibulum vestibulum posuere est, ut ullamcorper odio accumsan quis. Etiam quis fringilla sem. Nunc et pellentesque felis, sollicitudin accumsan turpis. Nulla tempor enim id odio hendrerit, ut euismod velit gravida. Cras et ipsum at risus tempus imperdiet. Etiam sed lacus posuere, scelerisque dui et, iaculis sem. Praesent interdum purus eu mi dictum efficitur.

            Aliquam erat volutpat. Praesent cursus eleifend orci, nec auctor neque consequat et. Fusce sagittis gravida nunc et accumsan. Donec viverra diam justo, nec pretium ligula finibus a. Quisque nunc dolor, hendrerit at purus at, laoreet venenatis nisl. Praesent vel felis in massa dignissim semper. Ut non finibus arcu. Proin tortor massa, consequat bibendum fringilla in, dictum non sem. Nulla facilisi. Nam accumsan sagittis est sed feugiat. Maecenas condimentum felis eu nisi ultrices molestie. Donec in erat vel sapien ultricies venenatis. Fusce consectetur lorem quis ornare feugiat.
          </p>
        </CardBody>
      </Card>
      <Card>
        <CardTitle>Card 2</CardTitle>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut placerat odio. Proin fringilla non lorem iaculis tincidunt. Vestibulum vestibulum posuere est, ut ullamcorper odio accumsan quis. Etiam quis fringilla sem. Nunc et pellentesque felis, sollicitudin accumsan turpis. Nulla tempor enim id odio hendrerit, ut euismod velit gravida. Cras et ipsum at risus tempus imperdiet. Etiam sed lacus posuere, scelerisque dui et, iaculis sem. Praesent interdum purus eu mi dictum efficitur.

            Aliquam erat volutpat. Praesent cursus eleifend orci, nec auctor neque consequat et. Fusce sagittis gravida nunc et accumsan. Donec viverra diam justo, nec pretium ligula finibus a. Quisque nunc dolor, hendrerit at purus at, laoreet venenatis nisl. Praesent vel felis in massa dignissim semper. Ut non finibus arcu. Proin tortor massa, consequat bibendum fringilla in, dictum non sem. Nulla facilisi. Nam accumsan sagittis est sed feugiat. Maecenas condimentum felis eu nisi ultrices molestie. Donec in erat vel sapien ultricies venenatis. Fusce consectetur lorem quis ornare feugiat.
          </p>
        </CardBody>
      </Card>
      <div>
        <Card>
          <CardBody>
            <div style={{ padding: "10px", display: "flex" }}>
              <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="First Name" />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Last Name" />
                <p>Radio button:</p>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Option 1</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">Option 2</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript">Option 3</label>
                <div>
                  <input type="submit" value="Submit" />
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