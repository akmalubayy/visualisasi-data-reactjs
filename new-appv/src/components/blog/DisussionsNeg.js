import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";



const DiscussionsNeg = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" - "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes" style={{alignContent:'left'}}>- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button size="md" theme="white">
                  <span className="text-success">
                  </span>{" "}
                  Positive
                </Button>
                <Button size="md" theme="danger">
                  <span className="text-danger">
                  </span>{" "}
                  Negative
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    {/* <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter> */}
  </Card>
);

DiscussionsNeg.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

DiscussionsNeg.defaultProps = {
  title: "Negative Mentions",
  discussions: [
    // {
    //   id: 1,
    //   date: "2 days ago",
    //   author: {
    //     image: require("../../images/avatars/CNN_Indonesia.png"),
    //     name: "CNN Indonesia",
    //     url: "#"
    //   },
    //   post: {
    //     title: "Riwayat Kasus Korupsi Komisioner KPU",
    //     url: "#"
    //   },
    //   body: "Riwayat Kasus Korupsi Komisioner KPU 19:08 WIB Bagikan : Ada beberapa komisioner ..."
    // },
    // {
    //   id: 2,
    //   date: "2 days ago",
    //   author: {
    //     image: require("../../images/avatars/Antara.jpg"),
    //     name: "Antara",
    //     url: "#"
    //   },
    //   post: {
    //     title: "Tersangka korupsi dana PT BM dan Malut cabang Dobo sakit permanen",
    //     url: "#"
    //   },
    //   body: "Proses penegakan supremasi hukum terhadap Mthias Akihary, satu tersangka kasus ..."
    // },
    // {
    //   id: 3,
    //   date: "2 days ago",
    //   author: {
    //     image: require("../../images/avatars/CNN_Indonesia.png"),
    //     name: "CNN Indonesia",
    //     url: "#"
    //   },
    //   post: {
    //     title: "15 Instruksi Kapolri soal Penanganan Kasus Korupsi di Pemda",
    //     url: "#"
    //   },
    //   body: "15 Instruksi Kapolri soal Penanganan Kasus Korupsi di Pemda CNN Indonesia | Seni ..."
    // }
  ]
};

export default DiscussionsNeg;
