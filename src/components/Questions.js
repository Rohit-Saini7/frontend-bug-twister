export const set1 = {
  c: {
    easy: {
      1: {
        erroredQuestion: `#include <stdio.h>
int main(){
  int chr = 97;
  unsigned char i = chr;
  printf("unsigned char: %u\\n",i);
  return 0;
}`,
        expectedOutput: `unsigned char: a\n`,
        question: `#include <stdio.h>
int main(){
  int chr = 97;
  unsigned char i = chr;
  printf("unsigned char: %c\\n",i);
  return 0;
}`,
      },
      2: {
        erroredQuestion: `#include <stdio.h>
    int main(){
    int a = 20;
    int b = 10;
    int c = 15;
    int d = 5;
    int e;
    e = a/(b+c)*d ; 
    printf("output: %d" ,  e );
    return 0;
    }`,
        expectedOutput: `output: 77`,
        question: `#include <stdio.h>
int main(){
  int a = 20;
  int b = 10;
  int c = 15;
  int d = 5;
  int e;
  e = a/b+c*d ;  
  printf("output: %d" ,  e );
  return 0;
}`,
      },
      3: {
        erroredQuestion: `#include<stdio.h>
int main(){
  printf( ""Bug Twister"");
  return 0;
}`,
        expectedOutput: `"Bug Twister"`,
        question: `#include<stdio.h>
int main(){
  printf("\\"Bug Twister\\"");
  return 0;
}`,
      },
      4: {
        erroredQuestion: `#include <stdio.h>
int main(){
	int arr[] = { 1, 2, 3, 4, 7, 98, 0, 12, 35, 99, 14 };
	printf("Number of elements:%d", sizeof(arr));
	return 0;
}`,
        expectedOutput: `Number of elements:11`,
        question: `#include <stdio.h>
int main(){
	int arr[] = { 1, 2, 3, 4, 7, 98, 0, 12, 35, 99, 14 };
	printf("Number of elements:%lu", sizeof(arr) / sizeof(arr[0]));
	return 0;
}`,
      },
      // 4: {
      //   erroredQuestion: `n`,
      //   expectedOutput: `n`,
      //   question: `n`,
      // },
    },
    medium: {
      1: {
        erroredQuestion: `#include<stdio.h>
int main(){
  int x = 20;
  int y = 10;
  if (~(x^y))
    printf(" x is equal to y ");
  else
    printf(" x is not equal to y ");
  return 0;
}`,
        expectedOutput: ` x is equal to y `,
        question: `#include<stdio.h>
int main(){
  int x = 10;
  int y = 10;
  if (!(x^y))
  printf(" x is equal to y ");
  else
  printf(" x is not equal to y ");
  return 0;
}`,
      },
      2: {
        erroredQuestion: `#include<stdio.h>
int N = 10;
int main(){
  static int x = 1;
  if (printf( "%d", x  &&  x++ < N  && main())
    { }
  return 0;
}`,
        expectedOutput: `1 2 3 4 5 6 7 8 9 10 `,
        question: `#include<stdio.h>
int N = 10;
int main(){
  static int x = 1;
  if (printf( "%d ", x) && (x++ < N )&& main())
    { }
  return 0;
}`,
      },
    },
    hard: {
      1: {
        erroredQuestion: `#include<stdio.h>
int N = 10;
int main(){
  static int x = 1;
  if (printf( "%d", x  &&  x++ < N  && main())
    { }
  return 0;
}`,
        expectedOutput: `1 2 3 4 5 6 7 8 9 10 `,
        question: `#include<stdio.h>
int N = 10;
int main(){
  static int x = 1;
  if (printf( "%d ", x) && (x++ < N )&& main())
    { }
  return 0;
}`,
      },
    },
  },
  cpp: {
    easy: {
      1: {
        erroredQuestion: `#include <iostream>
using namespace std;
int main(){
 int chr = 97;
unsigned char i = chr;
cout<<"unsigned char:"<<chr;
return 0;
}`,
        expectedOutput: `unsigned char: a\\n`,
        question: `#include <stdio.h>
   int main(){
    int chr = 97;
    unsigned char i = chr;
    cout<<"unsigned            char:"<<i;
    return 0;
}`,
      },
      2: {
        erroredQuestion: `#include <iostream.h>
using namespace std;
    int main(){
    int a = 20;
    int b = 10;
    int c = 15;
    int d = 5;
    int e;
    e = a/(b+c)*d ; 
    cout<<e;
    return 0;
    }`,
        expectedOutput: `output: 77`,
        question: `#include <iostream.h>
using namespace std;
int main(){
  int a = 20;
  int b = 10;
  int c = 15;
  int d = 5;
  int e;
  e = a/b+c*d ;  
  cout<<e;
  return 0;
}`,
      },
      3: {
        erroredQuestion: `#include<iostream.h>
using namespace std;
int main(){
  cout<<""Bug Twister"";
  return 0;
}`,
        expectedOutput: `"Bug Twister"`,
        question: `#include<iostream>
using namespace std;
int main(){
  cout<<"\\"Bug Twister\\"";
  return 0;
}`,
      },
      4: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },
    medium: {
      1: {
        erroredQuestion: `#include<iostream>
using namespace std;
int main(){
  int x = 20;
  int y = 10;
  if (~(x^y))
    cout<<" x is equal to y ";
  else
    cout<<" x is not equal to y ";
  return 0;
}`,
        expectedOutput: `x is not equal to y`,
        question: `#include<iostream>
using namespace std;
int main(){
  int x = 10;
  int y = 10;
  if (!(x^y))
  cout<<" x is equal to y ";
  else
  cout<<" x is not equal to y ";
  return 0;
}`,
      },
      2: {
        erroredQuestion: `#include<iostream>
using namespace std;
int N = 10;
int main(){
  static int x = 1;
  if (cout<<( x  &&  x++ < N  && main()));
    { }
  return 0;
      }`,
        expectedOutput: `1 2 3 4 5 6 7 8 9 10`,
        question: `#include<iostream>
using namespace std;
int N = 10;
int main(){
  static int x = 1;
  if (cout<< x && (x++ < N )&& main())
    { }
  return 0;
      }`,
      },
    },
    hard: {
      1: {
        erroredQuestion: `#include <iostream>
using namespace std;
int main(){
unsigned int i;
float f;
char c;
//input will be given automatically...
cout<<("Input integer, float and character values: ");
cin>>i>>f>>c;
//print
cout<<("Integer value:\\n"<< i) ;
cout <<("Float value:\\n"<<f) ;
cout<<("Character value: %s\\n"<<c) ;
return 0;
}`,
        expectedOutput: `Integer value: 13
Float value: 13.008000
Character value: A`,
        userInput: `13
13.008
A`,
        question: `#include <iostream>
using namespace std;
int main(){
unsigned int i;
float f;
char c;
//input will be given automatically...
cout<<"Input integer, float and character values: ";
cin>>i>>f>>c;
//print
cout<<"Integer value: "<<i<<"\n" ;
cout <<"Float value: "<<f<<"\n";
cout<<"Character value: "<<c<<"\n" ;
return 0;
}`,
      },
    },
  },
  java: {
    easy: {
      1: {
        erroredQuestion: `public class MyClass {
  public static void main(String args[]) {
    float f=10.7;
    System.out.println("output: "+f);
  }
}`,
        expectedOutput: `10.7`,
        question: `public class MyClass {
  public static void main(String args[]) {
    float f=10.7f;
    System.out.println("output: "+f);
  }
}`,
      },
      2: {
        erroredQuestion: `public class MyClass {
    public static void main(String args[]) {
      int a = 20;
      int b = 10;
      int c = 15;
      int d = 5;
      int e;
      e = a/(b+c)*d ; 
      System.out.println("output: "+e);
    }
}`,
        expectedOutput: `output: 77`,
        question: `public class MyClass {
  public static void main(String args[]) {
    int a = 20;
    int b = 10;
    int c = 15;
    int d = 5;
    int e;
    e = a/b+c*d ; 
    System.out.println("output: "+e);
  }
}`,
      },
      3: {
        erroredQuestion: `
    public class MyClass {
    public static void main(String args[]) {
      System.out.println("Bug Twister");
    }
}`,
        expectedOutput: `"Bug Twister"`,
        question: `public class MyClass {
  public static void main(String args[]) {
    System.out.println("\\"Bug Twister\\"");
  }
}`,
      },
      4: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },

    medium: {
      1: {
        erroredQuestion: `public class MyCode {
  public static void main(String args[]){
      System.out.print(20+ 1.34f + "A" + "B");
  }
}`,
        expectedOutput: `152.34`,
        question: `public class MyCode {
  public static void main(String args[]){
      System.out.print(20+ 1.34f + 'A' + 'B');
  }
}`,
      },
      2: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },

    hard: {
      1: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },
  },
  py: {
    easy: {
      1: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
      2: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
      3: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
      4: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },
    medium: {
      1: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
      2: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },
    hard: {
      1: {
        erroredQuestion: `n`,
        expectedOutput: `n`,
        question: `n`,
      },
    },
  },
};
