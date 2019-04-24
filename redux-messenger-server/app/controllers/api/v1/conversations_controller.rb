class Api::V1::ConversationsController < ApplicationController
  
  def index
    conversations = Conversation.all
    render json: conversations
  end

  def create
    conversation = Conversation.new(conversation_params)
    if conversation.save
      
      # this is what sends the things involved over this channel
      ActionCable.server.broadcast 'conversations_channel', conversation
      head :ok
    end
  end
    
  private
  
  def conversation_params
    params.require(:conversation).permit(:title)
  end

end