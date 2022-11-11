import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
  
  
  
  interface ITask{
    name: string,
    done: boolean
  }

  export default function Form(): JSX.Element {

    const [newTask, setNewTask] = useState<string>("");
    const [tasks, setTasks] = useState<ITask[]>([]);

   /*  function handleChange(e: Event){
      e.preventDefault()
      setNewTask(e.target.value)
    } */

    function handleSubmit(e: FormEvent){
      e.preventDefault()
      setNewTask("")
    }

    function addTask(name: string){
      const newTasks = [...tasks, {name, done: false}]
      setTasks(newTasks)
    }

    return (
      <Flex
        h={'max-content'}
        align={'top'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Tasks Application
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            Add a task
          </Text>
          <FormControl id="email" >
            <Input
              value={newTask}
              type="text"
              onChange={e => setNewTask(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleSubmit}
              >
              Add task
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }