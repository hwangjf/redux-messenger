class Api::V1::MessagesController < ApplicationController

  def create
    message = Message.new(message_params)
    message.user_id = curr_user.id
    conversation = Conversation.find(message_params[:conversation_id])
    if message.save  
      # this is what adds the message to the conversation 
      # subscribes to the conversation
      
      MessageChannel.broadcast_to conversation, MessageSerializer.new(message)
      render json: message
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :conversation_id)
  end

end