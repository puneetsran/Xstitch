class AddCreatedAtToPatterns < ActiveRecord::Migration[5.2]
  def change
    add_column :patterns, :created_at, :datetime
  end
end
