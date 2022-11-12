import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Box,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import Tasks from "./Tasks";

export interface ITask {
  name: string;
  done: boolean;
}

export default function Form(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const toast = useToast();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (newTask.trim() === "")
      return toast({
        title: "Add something",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
        containerStyle: {
          marginTop: "20px",
          marginRight: "20px",
        },
      });
    if (newTask.length < 5) {
      return toast({
        title: "Needs more than 5 characters",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
        containerStyle: {
          marginTop: "20px",
          marginRight: "20px",
        },
      });
    }
    addTask(newTask);
    setNewTask("");
  }

  function addTask(name: string) {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  }

  function taskDone(id: number) {
    const allTasks: ITask[] = [...tasks];
    allTasks[id].done = !allTasks[id].done;
    setTasks(allTasks);
  }

  function deleteTask(id: number, name: string) {
    const res = tasks.filter((t) => t.name !== name);
    setTasks(res);
  }

  return (
    <Box>
      <Flex
        h={"max-content"}
        align={"top"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Tasks Application
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Add a task
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              value={newTask}
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
            />
          </form>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleSubmit}
            >
              Add task
            </Button>
          </Stack>
        </Stack>
      </Flex>

      {tasks.map((t: ITask, i: number) => {
        return (
          <Flex justifyContent={"center"} margin={"20px"} key={i}>
            <Tasks
              task={t}
              title={t.name}
              deleteTask={() => deleteTask(i, t.name)}
              taskDone={() => taskDone(i)}
            />
          </Flex>
        );
      })}
    </Box>
  );
}