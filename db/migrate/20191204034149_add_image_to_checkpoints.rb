class AddImageToCheckpoints < ActiveRecord::Migration[5.2]
  def change
    add_column :checkpoints, :image_url, :text
  end
end
