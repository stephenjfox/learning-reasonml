Js.log("Hello, BuckleScript and Reason!");

module Variants = {
    type maybe ('a) =
        | Just ('a)
        | None;

    let map: ('a => 'b, maybe('a)) => maybe('b) = (f, _maybe) =>
        switch (_maybe) {
        | Just(value) => Just(f(value))
        | None => None
        };

    type animal =
        | Dog
        | Horse
        | Baboon
        ;
    let testData = Dog;

    Js.log(switch (testData) {
    | Dog => "woof";
    | Horse => "ney";
    | Baboon => "*explitive*";
    });

    let run = () => {
        let real = Just("car");

        let toLength = map(String.length);
        let optionals = Array.make(5, None);

        let boxByIndex = (pred: (int) => bool) => Array.mapi((ind, _) => pred(ind) ? Just(ind + 1) : None);
        
        let takeOdds = (i) => i mod 2 == 0;
        
        Js.log(boxByIndex(takeOdds)(optionals));
        
        Js.log(toLength(real));
    };
};

Variants.run()