class AddImageUrlToCheckpoints < ActiveRecord::Migration[5.2]
  def change
    add_column :checkpoints, :image_url, :string
  end
end
