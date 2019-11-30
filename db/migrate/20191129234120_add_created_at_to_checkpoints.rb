class AddCreatedAtToCheckpoints < ActiveRecord::Migration[5.2]
  def change
    add_column :checkpoints, :created_at, :datetime
  end
end
