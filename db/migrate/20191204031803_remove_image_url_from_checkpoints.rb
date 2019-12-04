class RemoveImageUrlFromCheckpoints < ActiveRecord::Migration[5.2]
  def change
    remove_column :checkpoints, :image_url, :string
  end
end
