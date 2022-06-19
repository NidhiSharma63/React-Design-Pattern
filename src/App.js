import React from "react";
import LargePeopleList from "./people/LargePeopleList";
import SmallPeopleList from "./people/SmallPeopleList";
import RegularList from './RegularList';

const people = [
  {
    name:'John Doe',
    age:34,
    hairColor:'brown',
    hobbies:['reading','cooking']
  },
  {
    name:'Anna',
    age:24,
    hairColor:'orange',
    hobbies:['shopping','dancing']
  },
  {
    name:'Ranno',
    age:27,
    hairColor:'black',
    hobbies:['reading','cycling']
  }
]
const product =  [
		{
			"thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951265358.png",
			"title": "1+ Mit Huhn 800g",
			"detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze für ein langes und glückliches Leben benötigt."
		},
		
		{
			"thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259098.png",
			"title": "1+ Mit Rind 800g",
			"detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze"
		},
		
		{
			"thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259289.png",
			"title": "Indoor mit Huhn 800g",
			"detail":"Wir von Whiskas® verstehen, was ihre Katze von Natur aus braucht und liebt. Indoor Katzen können weniger aktiv sein als Outdoor Katzen. Deshalb wurde Whiskas® Indoor mit hochwertigen Inhaltsstoffen entwickelt."
		},
		{
			"thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259470.png",
			"title": "7+ Mit Huhn 800g",
			"detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt.Im Laufe der Zeit ändern sich die Ernährungsbedürfnisse Ihrer Katze. Deshalb wurde Whiskas® 7+ speziell mit den richtigen Gehalt an Nährstoffen entwickelt, um die Vitalität Ihrer Katze zu bewahren und Ihnen zu ermöglichen Ihr die bestmögliche Fürsorge zukommen lassen zu können."
		},
		{
			"thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951265310.png",
			"title": "Junior Mit Lachs 800g",
			"detail":"Wir von Whiskas® verstehen was Ihr Kätzchen von Natur aus braucht und liebt. Deshalb enthält Whiskas® 2-12 Monate alle, für die gesunde Entwicklung Ihres Kätzchens notwendigen Nährstoffe. Und es enthält leckere, mit Milch gefüllte Knackits®, welche Ihr."
		}
	]

function App() {
  return (
    <>
      <RegularList 
        items={people} 
        ItemComponent={LargePeopleList} 
        resourcename="people"/>
    </>
  );
}

export default App;
// {
//   people.map((item)=>{
//     return(
//       <>
//         <LargePeopleList people={item}/>
//         <SmallPeopleList people={item}/>                
//       </>
//     )
//   })
// }