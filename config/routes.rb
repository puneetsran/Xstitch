Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data



    get '/data', to: 'tests#index'
    
    resources :patterns
    resources :users, only: [:index, :show]
    resources :favourites
    resources :checkpoints

    # namespace :users do
    #   resources :favorites, only: [:index, :show]       # something like this lets you do /users/1/favorites or /users/1/favorites/5
    # end

  end

  # get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end