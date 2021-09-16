Rails.application.routes.draw do
  resources :videos do
    resources :rappers
  end
  resources :camps
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
