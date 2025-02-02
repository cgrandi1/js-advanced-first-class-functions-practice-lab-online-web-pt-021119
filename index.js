function logDriverNames(drivers) {
    drivers.forEach(function (driver) {console.log(driver.name)});
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function (driver) {if(
    driver.hometown === location){
        console.log(driver.name)};
    });
}

function driversByRevenue(drivers) {
    return drivers.slice().sort(function (a, b) {return a.revenue - b.revenue});
}

function driversByName(drivers) {
    return drivers.slice().sort(function (a,b) {return a.name.localeCompare(b.name) });
    debugger;
}

function totalRevenue(drivers) {
    return drivers.reduce(function (agg, el, i, drivers) {return agg + el.revenue; }, 0);
}

function averageRevenue(drivers){
    return (drivers.reduce(function (agg, el, i, drivers) { return agg + el.revenue; }, 0) / drivers.length);
  }