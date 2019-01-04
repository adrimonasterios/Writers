Rails.application.routes.draw do
  root 'writers#index'

  resources :books, only: [:index, :show]
  resources :writers, only: [:index, :show]
end
