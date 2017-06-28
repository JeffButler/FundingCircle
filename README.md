# FundingCircle

## Document Questions: 

0) Explanatory Video: 

```

```

1) Consider complexity. How fast does your code run? How does it scale?

    O(n*p), n is for the numbers and p is for the prime array. Each time a number is evaluated to be prime, it has to check if that number is dvisible by any prime number. 
   
2) Consider cases where we want N primes.

    You can pass a argument into the function and set 
    
    ```
    var PRIME_SIZE = <argument value>;
    ```

## To Test: 

1) Open the file in test/index.html
  You should see a window pop up in the browser that shows you a summary of the tests
  
  
## To Run 

* Must have node or javascript installed locally to work

1) Go to src/ directory
2) Run:

```
node primeNumber.js
```

You should see something as follows: 
```
4 6 10 14 22 26 34 38 46 58
6 9 15 21 33 39 51 57 69 87
10 15 25 35 55 65 85 95 115 145
14 21 35 49 77 91 119 133 161 203
22 33 55 77 121 143 187 209 253 319
26 39 65 91 143 169 221 247 299 377
34 51 85 119 187 221 289 323 391 493
38 57 95 133 209 247 323 361 437 551
46 69 115 161 253 299 391 437 529 667
58 87 145 203 319 377 493 551 667 841
```
