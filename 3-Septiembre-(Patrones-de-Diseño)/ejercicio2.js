class NewsChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== user);
    }

    publishNews(news) {
        this.subscribers.forEach(subscriber => subscriber.update(news));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(news) {
        console.log(`${this.name} ha recibido la noticia: ${news}`);
    }
}

const channel = new NewsChannel();

const user1 = new User('Juan');
const user2 = new User('usuario 2');

channel.subscribe(user1);
channel.subscribe(user2);

channel.publishNews('Nueva noticia');

channel.unsubscribe(user2);

channel.publishNews('Otra noticia');