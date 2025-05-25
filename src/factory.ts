// Interface do Produto
interface Notifications {
  send(message: string): void;
}

// Produtos concretos
class EmailNotifications implements Notifications {
  send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

class SMSNotifications implements Notifications {
  send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

class WhatsappNotifications implements Notifications {
  send(message: string): void {
    console.log(`Enviando WhatsApp: ${message}`);
  }
}

// Creator abstrato
abstract class NotificationsCreator {
  abstract createNotifications(): Notifications;

  notifyUser(message: string): void {
    const notifications = this.createNotifications();
    notifications.send(message);
  }
}

// ConcreteCreators
class EmailNotificationsCreator extends NotificationsCreator {
  createNotifications(): Notifications {
    return new EmailNotifications();
  }
}

class SMSNotificationsCreator extends NotificationsCreator {
  createNotifications(): Notifications {
    return new SMSNotifications();
  }
}

class WhatsappNotificationsCreator extends NotificationsCreator {
  createNotifications(): Notifications {
    return new WhatsappNotifications();
  }
}

// Cliente
export function factory() {
  let creator: NotificationsCreator;

  // Você pode alternar facilmente a notificação aqui:
  creator = new EmailNotificationsCreator();
  creator.notifyUser("Olá via Email!");

  creator = new SMSNotificationsCreator();
  creator.notifyUser("Olá via SMS!");

  creator = new WhatsappNotificationsCreator();
  creator.notifyUser("Olá via WhatsApp!");
}
