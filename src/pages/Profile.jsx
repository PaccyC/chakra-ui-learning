
import { ChatIcon, EmailIcon, StarIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon } from '@chakra-ui/react'

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme='purple' variant="enclosed">
      <TabList>
      <Tab _selected={{color:"white",bg:"purple.400"}}>Account Info</Tab>
      <Tab _selected={{color:"white",bg:"purple.400"}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email:paccy@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={StarIcon}/>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </ListItem>
          </List>



        </TabPanel>
        <TabPanel>
          
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
