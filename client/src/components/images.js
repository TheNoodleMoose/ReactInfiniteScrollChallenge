import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";

export class Images extends Component {
  // Our state contains an empty images array, our count and the starting number
  state = {
    images: [],
    count: 30,
    start: 1
  };

  // On component did mount, make an axios request to our route to get our images
  // Set the state of our images array to the response
  componentDidMount() {
    const { count, start } = this.state;
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({
        images: res.data
      })
    );
  }

  // Function that fires once all the images have been viewed
  // Sets out start number to be the next number for our set of incoming images
  // We then make an axios request from that new start point
  // We then concat the new response with our old images in the state
  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({
        images: this.state.images.concat(res.data)
      })
    );
  };

  render() {
    return (
      <div className="images">
        {/* Define our InfiniteScroll */}
        <InfiniteScroll
          dataLength={this.state.images.length}
          // When it runs out of images it will fire the fetchImages function to get new images
          next={this.fetchImages}
          hasMore={true}
          // When loading render this
          loader={<h4>Loading...</h4>}
        >
          {/* Map through our array of images */}
          {this.state.images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
