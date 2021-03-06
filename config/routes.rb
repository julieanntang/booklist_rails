Rails.application.routes.draw do
  resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "books#app"

  get "/books", to: "books#index"
  post "/books", to: "items#create"

  delete "/books/:id", to: "books#destroy"

end
