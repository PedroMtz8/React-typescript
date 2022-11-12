import { HStack, Box, Button, Text } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { ITask } from "./Form";

interface TaskRef {
  task: ITask;
  title: string;
  deleteTask: Function;
  taskDone: Function;
}

export default function Tasks({
  task,
  title,
  deleteTask,
  taskDone,
}: TaskRef): JSX.Element {
  return (
    <HStack spacing={8}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        borderWidth="1px"
        borderRadius={"5px"}
      >
        <Box
          p={5}
          shadow="md"
          display="inline-flex"
          width={"340px"}
          flexDirection="column"
          minH={20}
        >
          <Text
            fontSize="xl"
            textDecoration={task.done ? "line-through" : ""}
            /* textDecoration={"line-through"}
            textDecorationColor={"gray"} */
          >
            {title}
          </Text>
        </Box>
        <Box alignItems={"center"}>
          <Button
            marginTop={"5px"}
            marginRight={"5px"}
            width={"20px"}
            right="5px"
            onClick={() => taskDone()}
          >
            <CheckIcon />
          </Button>
          <Button
            marginTop={"5px"}
            width={"20px"}
            right="5px"
            onClick={() => deleteTask()}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
    </HStack>
  );
}
