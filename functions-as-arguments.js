function repeat( fn, n ) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function hello() {
  console.log('hello world');
}

function goodbye() {
  console.log('goodbye world');
}

// hello();
// goodbye();

repeat( hello, 5 );
repeat( goodbye, 5 );