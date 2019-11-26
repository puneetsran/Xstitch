class CreateFavourites < ActiveRecord::Migration[5.2]
  def change
    create_table :favourites do |t|
    end
    add_reference :favourites, :user, foreign_key: true
    add_reference :favourites, :pattern, foreign_key: true
  end
end
