import '@uirouter/angularjs'

export function routes($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
    $stateProvider
        .state("home", {
            url: "/",
            component: "todoList"
        })
}
