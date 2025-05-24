// Componente base (interface)
interface Mensagem {
  enviar(): string;
}

// Componente concreto
class MensagemSimples implements Mensagem {
  enviar(): string {
    return "Mensagem enviada";
  }
}

// Decorador base (classe abstrata)
abstract class MensagemDecorator implements Mensagem {
  constructor(protected componente: Mensagem) {}

  abstract enviar(): string;
}

// Decorador concreto: adiciona criptografia
class MensagemComCriptografia extends MensagemDecorator {
  enviar(): string {
    const conteudo = this.componente.enviar();
    return `${conteudo} (com criptografia)`;
  }
}

// Decorador concreto: adiciona log
class MensagemComLog extends MensagemDecorator {
  enviar(): string {
    console.log("Log: Mensagem enviada");
    return this.componente.enviar();
  }
}

export function decorator() {
  // Criando a mensagem básica
  let mensagem: Mensagem = new MensagemSimples();

  // Decorando com criptografia
  mensagem = new MensagemComCriptografia(mensagem);

  // Decorando com log
  mensagem = new MensagemComLog(mensagem);

  // Enviando a mensagem
  console.log(mensagem.enviar());
}
