import React from "react"
import handImages from "../public/handImages.svg"
import {
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react"

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Button onClick={onOpen} colorScheme="orange">
        Learn More
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Language Recognition</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm">
              This project is an effort to use AI to facilitate verbally impaired people with communication by recognizing their hand-gestures.
              This AI model is trained on a dataset of American Sign Language hand-gestures. The ASL is widely used across the globe for communication.
              <br></br>
              This project uses the TensorflowJS library as a machine learning framework and detects the hand-gestures from the webcam.
            </Text><Text fontSize="sm">
              Project made by
              <Link
                href="https://praneetdixit.me/"
                isExternal
                color="orange.300"
              >
                Praneet Dixit
              </Link>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
