function ChatbotResponse({ text, index }) {
  return (
    <div className="self-start p-4 max-w-xl mx-auto bg-gray-100 rounded-lg shadow">
      <p className="text-gray-800">{text}</p>
    </div>
  );
}

export default ChatbotResponse;
