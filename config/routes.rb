Rails.application.routes.draw do
  root 'writers#index'

  resources :books, only: [:index]
end
