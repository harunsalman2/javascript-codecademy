 #include <stdio.h>
 #include <conio.h>
 char Name[20], Age[20], Address[20], Hobbies[20], Is_married[20], list_school[10], Major[20], Skill[20], Interest_In_Coding[10];
 int main ()
 {
 printf("Name = "); scanf("%s",&Name);
 printf("Age = "); scanf("%s",&Age);
 printf("Address = "); scanf("%s",&Address);
 printf("Hobbies = "); scanf("%s",&Hobbies);
 printf("Is_married = "); scanf("%s",&Is_married);
 printf("list_school = "); scanf("%s",&list_school);
 printf("Major = "); scanf("%s",&Major);
 printf("Skill = ");scanf("%s",&Skill);
 printf("Interest_In_Coding = "); scanf("%s",&Interest_In_Coding);
 return 0;
 }

 }
 	// fungsi minat coding
 	public function minat coding($minat coding)
 	{
         $this->data['interest in coding'] = $minat coding;
         return $this;
  	}
 	// fungsi konvert ke json
 	public function konjson(){
 		return json_encode($this->data, JSON_PRETTY_PRINT);
 	}
 	
}

function getProfile() {
  return {
  printf("name : harun salman',
  printf("age : 29 ");
  printf("address : Jl. ciater tengah no.76, serpong',
  printf("hobbies : ['sepak bola','game'] //Array,
  printf("s_married : false //Boolean,
  printf("school : [
          high School : 'Smk Pustek Serpong',
           university : 'Universitas Bina Sarana Informatika'
    }, // Object
  printf("skills : [{
         name : 'problem solving / creative',
         years_of_experince : 1
  },{
  printf("interest_in_coding : correct //Boolean"
    }] // Array Of Object
  }
}