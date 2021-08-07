function printInfo(customers) {
    console.log("using of");
    for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
        var c = customers_1[_i];
        console.log(c);
    }
    console.log("using in");
    for (var c in customers) {
        console.log(c);
    }
}
printInfo([{ id: 101, firstName: 'abc', lastname: 'xxy' },
    { id: 102, firstName: 'def', lastname: 'yhs' },
    { id: 103, firstName: 'pqr', lastname: 'ksk', location: 'mumbai' },
]);
