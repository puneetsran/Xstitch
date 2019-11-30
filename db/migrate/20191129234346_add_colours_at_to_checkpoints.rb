class AddColoursAtToCheckpoints < ActiveRecord::Migration[5.2]
  def change
    add_column :checkpoints, :colours, :jsonb
  end
end
