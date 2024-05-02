import Collapse from "./components/Collapse";
import CallbackChat from "./components/CallbackChat";
import Liker from "./components/Liker";

export default function app() {
  const collapseWidget = new Collapse('Всем привет! Проходите и располагайтесь пожалуйста. Я пробую себя в CSS анимации, не судите строго:) А пока я настраиваю animation-delay, keyframes и прочие интересные штуки, расскажите немного о себе! А я буду внимательно слушать.');
  const callbackChatWidget = new CallbackChat();
  const likerWidget = new Liker();

  const container = document.querySelector('.container');
  container.childNodes[0].append(collapseWidget.element);
  container.childNodes[1].append(callbackChatWidget.element);
  container.childNodes[2].append(likerWidget.element);
}
