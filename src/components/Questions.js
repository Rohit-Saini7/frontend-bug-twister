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
        erroredQuestion: `#include <iostream>
using namespace std;

int main() {
  double num1 = 10, num2 = .01, product;

  product = num1 * num2;  

  cout << "Product = " << product;    
    
  return 0;
}`,
        expectedOutput: `Product = 0.1`,
        question: `#include <iostream>
using namespace std;

int main() {
  double num1 = 10, num2 = .01, product;

  product = num1 * num2;  

  cout << "Product = " << product;    
    
  return 0;
}`,
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
        expectedOutput: `Bug Twister`,
        question: `public class MyClass {
  public static void main(String args[]) {
    System.out.println("Bug Twister");
  }
}`,
      },
      4: {
        erroredQuestion: `public class MyClass {
  public static void main(String args[]) {
    float f=10.7f;
    System.out.println("output: "+f);
  }
}`,
        expectedOutput: `output: 10.7\n`,
        question: `public class MyClass {
  public static void main(String args[]) {
    float f=10.7f;
    System.out.println("output: "+f);
  }
}`,
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
        erroredQuestion: `public class MyClass {
  public static void main(String args[]) {
    System.out.println("Bug Twister");
  }
}`,
        expectedOutput: `Bug Twister`,
        question: `public class MyClass {
  public static void main(String args[]) {
    System.out.println("Bug Twister");
  }
}`,
      },
    },

    hard: {
      1: {
        erroredQuestion: `public class MyClass {
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
        expectedOutput: `output: 77\n`,
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
    },
  },
  py: {
    easy: {
      1: {
        erroredQuestion: `index = 3
try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except IndexError: # specify the type
    print("Please enter a valid index.")`,
        expectedOutput: `4\n`,
        question: `index = 3
try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except IndexError: # specify the type
    print("Please enter a valid index.")`,
      },
      2: {
        erroredQuestion: `prices = {'apple': 0.40, 'banana': 0.50}
my_purchase = {
    'apple': 1,
    'banana': 6}
grocery_bill = sum(prices[fruit] * my_purchase[fruit]
                   for fruit in my_purchase)
print ('I owe the grocer $%.2f' % grocery_bill)`,
        expectedOutput: `I owe the grocer $3.40\n`,
        question: `prices = {'apple': 0.40, 'banana': 0.50}
my_purchase = {
    'apple': 1,
    'banana': 6}
grocery_bill = sum(prices[fruit] * my_purchase[fruit]
                   for fruit in my_purchase)
print ('I owe the grocer $%.2f' % grocery_bill)`,
      },
      3: {
        erroredQuestion: `REFRAIN = '''
%d bottles of beer on the wall,
%d bottles of beer,
take one down, pass it around,
%d bottles of beer on the wall!
'''
bottles_of_beer = 2
while bottles_of_beer > 1:
    print (REFRAIN % (bottles_of_beer, bottles_of_beer,
        bottles_of_beer - 1))
    bottles_of_beer -= 1`,
        expectedOutput: `\n2 bottles of beer on the wall,\n2 bottles of beer,\ntake one down, pass it around,\n1 bottles of beer on the wall!\n\n`,
        question: `REFRAIN = '''
%d bottles of beer on the wall,
%d bottles of beer,
take one down, pass it around,
%d bottles of beer on the wall!
'''
bottles_of_beer = 2
while bottles_of_beer > 1:
    print (REFRAIN % (bottles_of_beer, bottles_of_beer,
        bottles_of_beer - 1))
    bottles_of_beer -= 1`,
      },
      4: {
        erroredQuestion: `class BankAccount(object):
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def overdrawn(self):
        return self.balance < 0
my_account = BankAccount(15)
my_account.withdraw(50)
print (my_account.balance, my_account.overdrawn())`,
        expectedOutput: `-35 True\n`,
        question: `class BankAccount(object):
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def overdrawn(self):
        return self.balance < 0
my_account = BankAccount(15)
my_account.withdraw(50)
print (my_account.balance, my_account.overdrawn())`,
      },
    },
    medium: {
      1: {
        erroredQuestion: `import unittest
def median(pool):
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[int((size - 1) / 2)]
    else:
        return (copy[int(size/2 - 1)] + copy[int(size/2)]) / 2
class TestMedian(unittest.TestCase):
    def testMedian(self):
        self.assertEqual(median([2, 9, 9, 7, 9, 2, 4, 5, 8]), 7)
if __name__ == '__main__':
    unittest.main()`,
        expectedOutput: `\n----------------------------------------------------------------------\nRan 1 test in 0.000s\n\nOK\n`,
        question: `import unittest
def median(pool):
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[int((size - 1) / 2)]
    else:
        return (copy[int(size/2 - 1)] + copy[int(size/2)]) / 2
class TestMedian(unittest.TestCase):
    def testMedian(self):
        self.assertEqual(median([2, 9, 9, 7, 9, 2, 4, 5, 8]), 7)
if __name__ == '__main__':
    unittest.main()`,
      },
      2: {
        erroredQuestion: `from itertools import groupby
lines = '''
This is the
first paragraph.

This is the second.
'''.splitlines()
# Use itertools.groupby and bool to return groups of
# consecutive lines that either have content or don't.
for has_chars, frags in groupby(lines, bool):
    if has_chars:
        print (' '.join(frags))
# PRINTS:
# This is the first paragraph.
# This is the second.`,
        expectedOutput: `This is the first paragraph.\nThis is the second.\n`,
        question: `from itertools import groupby
lines = '''
This is the
first paragraph.

This is the second.
'''.splitlines()
# Use itertools.groupby and bool to return groups of
# consecutive lines that either have content or don't.
for has_chars, frags in groupby(lines, bool):
    if has_chars:
        print (' '.join(frags))
# PRINTS:
# This is the first paragraph.
# This is the second.`,
      },
    },
    hard: {
      1: {
        erroredQuestion: `import csv

# need to define cmp function in Python 3
def cmp(a, b):
    return (a > b) - (a < b)

# write stocks data as comma-separated values
with open('stocks.csv', 'w', newline='') as stocksFileW:
    writer = csv.writer(stocksFileW)
    writer.writerows([
        ['GOOG', 'Google, Inc.', 505.24, 0.47, 0.09],
        ['YHOO', 'Yahoo! Inc.', 27.38, 0.33, 1.22],
        ['CNET', 'CNET Networks, Inc.', 8.62, -0.13, -1.4901]
    ])

# read stocks data, print status messages
with open('stocks.csv', 'r') as stocksFile:
    stocks = csv.reader(stocksFile)

    status_labels = {-1: 'down', 0: 'unchanged', 1: 'up'}
    for ticker, name, price, change, pct in stocks:
        status = status_labels[cmp(float(change), 0.0)]
        print ('%s is %s (%.2f)' % (name, status, float(pct)))`,
        expectedOutput: `Google, Inc. is up (0.09)\nYahoo! Inc. is up (1.22)\nCNET Networks, Inc. is down (-1.49)\n`,
        question: `import csv

# need to define cmp function in Python 3
def cmp(a, b):
    return (a > b) - (a < b)

# write stocks data as comma-separated values
with open('stocks.csv', 'w', newline='') as stocksFileW:
    writer = csv.writer(stocksFileW)
    writer.writerows([
        ['GOOG', 'Google, Inc.', 505.24, 0.47, 0.09],
        ['YHOO', 'Yahoo! Inc.', 27.38, 0.33, 1.22],
        ['CNET', 'CNET Networks, Inc.', 8.62, -0.13, -1.4901]
    ])

# read stocks data, print status messages
with open('stocks.csv', 'r') as stocksFile:
    stocks = csv.reader(stocksFile)

    status_labels = {-1: 'down', 0: 'unchanged', 1: 'up'}
    for ticker, name, price, change, pct in stocks:
        status = status_labels[cmp(float(change), 0.0)]
        print ('%s is %s (%.2f)' % (name, status, float(pct)))`,
      },
    },
  },
};
