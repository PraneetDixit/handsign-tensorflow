import React from "react"
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

export default function Chart() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Button onClick={onOpen} colorScheme="orange">
        ASL Chart
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Know the ASL alphabet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src="https://www.disabled-world.com/pics/1/asl-alphabet.jpg"/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
