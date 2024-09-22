function fib(n) {  
    //initial value
    // fib(0) = 0;
    // fib(1) = 1;
    if( n == 0 )
        return 0;
    if( n == 1 )
        return 1;
    //fibonacci function
    return fib(n-1) + fib(n-2);
}
  
  fib(0); // 0
  fib(1); // 1
  fib(5); // 5
  fib(10); // 55