import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark" className='w-100 text-bg-primary .container-fluid	col-12 .display-flex  match-to-row' >
      <Carousel.Item >
        <img
          className="d-block w-100  "
          src="https://www.andbeyond.com/wp-content/uploads/sites/5/Jahangiri-Mahal-Agra-Fort1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='text-light'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://www.andbeyond.com/wp-content/uploads/sites/5/Jahangiri-Mahal-Agra-Fort1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-light'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block figure-img w-100 img-fluid "
          src="https://www.andbeyond.com/wp-content/uploads/sites/5/Jahangiri-Mahal-Agra-Fort1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='text-light'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;