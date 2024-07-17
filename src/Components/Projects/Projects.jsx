import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Container from "../Container/Container";
import img from "../../assets/Projects/project-img.jpg";
import author from "../../assets/Projects/person/person1.jpg";

const Projects = () => {
  return (
    <Container>
      <h3 className="text-center mt-20 text-2xl md:text-3xl lg:text-5xl font-extrabold font-inria-serif">
        Our Students Best Projects
      </h3>
      <div className="flex justify-center mb-12 mt-2">
        <div className="w-20 h-1 bg-[#BF1A2F] rounded-full"></div>
      </div>
        <Card className="relative font-inria-serif max-w-[26rem] shadow-lg mx-auto">
          <div className="relative">
            <img src={img} alt="project-img" className="w-full" />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            <div className="absolute bottom-0 right-0 transform translate-y-1/2 flex flex-col items-center">
              <img
                className="w-16 h-16 rounded-full border-4 border-white"
                src={author}
                alt="author"
              />
              <Typography
                variant="h6"
                color="white"
                className="font-medium mt-1 text-center w-full bg-[#BF1A2F] px-4 rounded-xl"
              >
                authorName
              </Typography>
            </div>
          </div>
          <CardBody className="px-4 pb-4 ">
            <div className="mb-1 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className="font-medium">
                projectTitle
              </Typography>
            </div>
            <Typography className="pl-1" color="gray">projectDescription: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet accusantium ipsam sed, minus, fugiat rerum placeat iusto iure eum dolorum dicta eligendi, facilis sint molestiae! Corrupti ipsum aperiam eius!</Typography>
          </CardBody>
        </Card>
    </Container>
  );
};

export default Projects;