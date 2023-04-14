Rails.application.routes.draw do
  
  resources :punchcards
  
  resources :customers 
  # do 
  #   resources :punchcards, only: [:show, :index]
  # end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # get '/punchcards/count/:number', to: 'punchcards#count'
  # get '/top', to: 'customers#top'
  # get '/alphabet', to: 'customers#alphabet'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


# 1. creating a custom route, dynamic paramter, will map to a new action in the punchcards controller